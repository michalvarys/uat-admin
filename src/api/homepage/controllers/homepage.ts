/**
 * homepage controller
 */

import { factories } from "@strapi/strapi";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const newsComparator = (a, b) => {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  if (dateA === dateB) {
    return 0;
  }
  return dateA > dateB ? -1 : 1;
};

const parseLimits = (query) => {
  const inl = Number(query.inl);
  const nl = Number(query.nl);

  return {
    newsLimit: !Number.isNaN(nl) ? nl : undefined,
    importantNewsLimit: !Number.isNaN(inl) ? inl : undefined,
  };
};

export default factories.createCoreController(
  "api::homepage.homepage",
  ({ strapi }) => {
    return {
      async find(ctx) {
        const { request, response } = ctx;
        const url = new URL(request.url, "http://localhost");
        const locale = url.searchParams.get("locale");
        const inl = url.searchParams.get("inl");
        const nl = url.searchParams.get("nl");
        const { importantNewsLimit, newsLimit } = parseLimits({ inl, nl });

        const news = await strapi
          .documents("api::news-entry.news-entry")
          .findMany({
            where: { locale },
            limit: newsLimit,
            orderBy: "date",
            sort: "date:desc"
          });

        const importantNews = await strapi
          .documents("api::news-entry.news-entry")
          .findMany({
            where: { locale, important_news: true },
            limit: importantNewsLimit,
            orderBy: "date",
            sort: "date:desc"
          });

        const galleries = await strapi
          .documents("api::gallery.gallery")
          .findMany({ locale });

        const galleryEvents = await strapi
          .documents("api::gallery-event.gallery-event")
          .findMany({
            locale,
          })

        const footer = await strapi.documents("api::footer.footer").findFirst({
          locale,
          populate: { instagram: true, youtube: true, facebook: true },
        });

        const homepage = await strapi.query("api::homepage.homepage").findOne({
          where: { locale },
          populate: {
            sections: true,
            text_with_image: true,
            fields_of_studies: true,
            cover_image: true,
            festivals: true,
            galleries: true,
            video_with_text: true,
            logo: true,
          },
        });

        const sanitizedGalleries: Record<string, any> =
          await this.sanitizeOutput(galleries || {}, ctx);

        const transformedUATGalleries = homepage.galleries.map((item) => {
          if (item.galleries_uat?.image_424x488) {
            let transformed = {
              ...item.galleries_uat,
              image: item.galleries_uat.image_424x488,
            };
            delete transformed.image_424x488;
            return transformed;
          }

          return item.galleries_uat;
        });
        
        const footerData: Record<string, any> = await this.sanitizeOutput(
          footer || {},
          ctx
        );
        const home: Record<string, any> = await this.sanitizeOutput<object>(
          homepage || {},
          ctx
        );
        const result = {
          ...home,
          news: await this.sanitizeOutput(news || [], ctx),
          importantNews: await this.sanitizeOutput(importantNews || [], ctx),
          galleries: {
            ...sanitizedGalleries,
            galleries_uats: transformedUATGalleries,
          },
          galleryEvents: await this.sanitizeOutput(galleryEvents || [], ctx),
          fields_of_studies: await this.sanitizeOutput(
            (home.fields_of_studies || [])
              .map((item) => item.field_of_study)
              .slice(0, 5),
            ctx
          ),
          social: {
            facebook: footerData ? footerData.facebook : null,
            instagram: footerData ? footerData.instagram : null,
            youtube: footerData ? footerData.youtube : null,
          },
        };
        
        return result;
      },
    };
  }
);
