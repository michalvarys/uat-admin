import type { Struct, Schema } from '@strapi/strapi';

export interface SharedYouTubePlayerSlice extends Struct.ComponentSchema {
  collectionName: 'components_shared_you_tube_player_slices';
  info: {
    name: 'YouTubePlayerSlice';
    icon: 'play-circle';
    description: '';
    displayName: 'YouTubePlayerSlice';
  };
  attributes: {
    youtubeVideoId: Schema.Attribute.String & Schema.Attribute.Required;
    coverImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedVideoWithTextSlice extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_with_text_slices';
  info: {
    name: 'VideoWithTextSlice';
    displayName: 'VideoWithTextSlice';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    download_link: Schema.Attribute.Component<
      'navigation.external-link',
      false
    >;
    cover_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'navigation.external-link', false>;
    youtube_video_id: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_with_image_slice';
  info: {
    name: 'TextWithImageSlice';
    displayName: 'TextWithImageSlice';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    left_side_image: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    download_link: Schema.Attribute.Component<
      'navigation.internal-link',
      false
    >;
    link: Schema.Attribute.Component<'navigation.internal-link', false>;
  };
}

export interface SharedTeachersSlice extends Struct.ComponentSchema {
  collectionName: 'components_shared_teachers_slices';
  info: {
    name: 'TeachersSlice';
    displayName: 'TeachersSlice';
    icon: 'chalkboard-teacher';
    description: '';
  };
  attributes: {
    teachers: Schema.Attribute.Component<'entries.teacher-entry', true>;
  };
}

export interface SharedTabs extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabs';
  info: {
    name: 'Tabs';
    displayName: 'Tabs';
    icon: 'grip-horizontal';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    tabs: Schema.Attribute.Component<'shared.tab-item', true>;
  };
}

export interface SharedTabItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_items';
  info: {
    name: 'TabItem';
    displayName: 'TabItem';
    icon: 'clipboard-list';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.tab-item-content', true>;
  };
}

export interface SharedTabItemContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_item_contents';
  info: {
    name: 'TabItemContent';
    displayName: 'TabItemContent';
    icon: 'align-left';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    links: Schema.Attribute.Relation<'oneToMany', 'api::news-entry.news-entry'>;
  };
}

export interface SharedSubjects extends Struct.ComponentSchema {
  collectionName: 'components_shared_subjects';
  info: {
    name: 'Subjects';
    displayName: 'Subjects';
    icon: 'book';
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    sections: Schema.Attribute.Component<'shared.subjects-section', true>;
    sponsor: Schema.Attribute.Component<'shared.sponsor', false>;
  };
}

export interface SharedSubjectsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_subjects_sections';
  info: {
    name: 'SubjectsSection';
    displayName: 'SubjectsSection';
    icon: 'book-open';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'shared.short-text', true>;
  };
}

export interface SharedSponsor extends Struct.ComponentSchema {
  collectionName: 'components_shared_sponsors';
  info: {
    name: 'Sponsor';
    displayName: 'Sponsor';
    icon: 'ad';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedSingleWinner extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_winners';
  info: {
    name: 'single_winner';
    displayName: 'SingleWinner';
    icon: 'award';
    description: '';
  };
  attributes: {
    place: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    author: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    imager: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedShortText extends Struct.ComponentSchema {
  collectionName: 'components_shared_short_texts';
  info: {
    name: 'ShortText';
    displayName: 'ShortText';
    icon: 'align-center';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedRichTextWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_text_with_title';
  info: {
    name: 'RichTextWithTitle';
    displayName: 'RichTextWithTitle';
    icon: 'edit';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SharedPrizes extends Struct.ComponentSchema {
  collectionName: 'components_shared_prizes';
  info: {
    name: 'prizes';
    displayName: 'Prizes';
    icon: 'th-large';
    description: '';
  };
  attributes: {
    first_prize: Schema.Attribute.String & Schema.Attribute.Required;
    second_prize: Schema.Attribute.String & Schema.Attribute.Required;
    third_prize: Schema.Attribute.String & Schema.Attribute.Required;
    special_prize: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    honorable_mentions: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    name: 'Gallery';
    displayName: 'Gallery';
    icon: 'images';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    gallery_item: Schema.Attribute.Component<'shared.gallery-image', true>;
  };
}

export interface SharedGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_images';
  info: {
    name: 'GalleryImage';
    displayName: 'GalleryImage';
    icon: 'file-image';
    description: '';
  };
  attributes: {
    thumbnail_410x551: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    fullsize: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedFestivalWinners extends Struct.ComponentSchema {
  collectionName: 'components_shared_festival_winners';
  info: {
    name: 'festivalWinners';
    displayName: 'festivalWinners';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    single_winner: Schema.Attribute.Component<'shared.single-winner', true>;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFestivalPrizes extends Struct.ComponentSchema {
  collectionName: 'components_shared_festival_prizes';
  info: {
    name: 'festival_prizes';
    displayName: 'festival_prizes';
    icon: 'republican';
  };
  attributes: {
    first_prize: Schema.Attribute.String & Schema.Attribute.Required;
    second_prize: Schema.Attribute.String & Schema.Attribute.Required;
    third_prize: Schema.Attribute.String & Schema.Attribute.Required;
    special_prize: Schema.Attribute.String;
    honorable_mention: Schema.Attribute.String;
  };
}

export interface SharedEmploymentStatistics extends Struct.ComponentSchema {
  collectionName: 'components_shared_employment_statistics';
  info: {
    name: 'EmploymentStatistics';
    displayName: 'EmploymentStatistics';
    icon: 'angle-double-up';
  };
  attributes: {
    statistic_entry: Schema.Attribute.Component<
      'entries.statistic-entry',
      true
    >;
  };
}

export interface SharedCode extends Struct.ComponentSchema {
  collectionName: 'components_shared_codes';
  info: {
    name: 'code';
    displayName: 'code';
    icon: 'code';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    name: 'Cards';
    displayName: 'Cards';
    icon: 'pager';
  };
  attributes: {
    CardItem: Schema.Attribute.Component<'shared.card-item', true>;
  };
}

export interface SharedCardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_items';
  info: {
    name: 'CardItem';
    displayName: 'CardItem';
    icon: 'columns';
  };
  attributes: {
    Link: Schema.Attribute.Component<'navigation.external-link', false>;
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedApplicationsAtUniversity extends Struct.ComponentSchema {
  collectionName: 'components_shared_applications_at_universities';
  info: {
    name: 'applications_at_university';
    displayName: 'applications_at_university';
    icon: 'address-card';
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    sections: Schema.Attribute.Component<
      'shared.applications-at-uni-section',
      true
    >;
  };
}

export interface SharedApplicationsAtUniSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_applications_at_uni_sections';
  info: {
    name: 'AppUniSection';
    displayName: 'AppUniSection';
    icon: 'book-open';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'shared.short-text', true>;
  };
}

export interface NavigationInternalLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_internal_links';
  info: {
    name: 'InternalLink';
    displayName: 'InternalLink';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String;
  };
}

export interface NavigationImageBoxLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_image_box_links';
  info: {
    name: 'ImageBoxLink';
    displayName: 'ImageBoxLink';
    icon: 'image';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    image_200x70: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface NavigationFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'FooterSection';
    icon: 'bookmark';
    description: '';
  };
  attributes: {
    links: Schema.Attribute.Component<'navigation.internal-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavigationExternalLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_external_links';
  info: {
    name: 'ExternalLink';
    displayName: 'ExternalLink';
    icon: 'external-link-alt';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationDownloadLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_download_links';
  info: {
    name: 'DownloadLink';
    displayName: 'DownloadLink';
    icon: 'apple-alt';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationConditionalInternalLink
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_conditional_internal_links';
  info: {
    name: 'ConditionalInternalLink';
    displayName: 'ConditionalInternalLink';
    icon: 'external-link-square-alt';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface NavigationConditionalExternalLink
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_conditional_external_links';
  info: {
    name: 'ConditionalExternalLink';
    displayName: 'ConditionalExternalLink';
    icon: 'unlink';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface EntriesTeacherEntry extends Struct.ComponentSchema {
  collectionName: 'components_entries_teacher_entries';
  info: {
    name: 'teacher_entry';
    displayName: 'teacher_entry';
    icon: 'microscope';
    description: '';
  };
  attributes: {
    teacher: Schema.Attribute.Relation<'oneToOne', 'api::teacher.teacher'>;
    title: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

export interface EntriesStudyEntry extends Struct.ComponentSchema {
  collectionName: 'components_entries_study_entries';
  info: {
    name: 'study_entry';
    displayName: 'study_entry';
    icon: 'pen-fancy';
    description: '';
  };
  attributes: {
    field_of_study: Schema.Attribute.Relation<
      'oneToOne',
      'api::field-of-study.field-of-study'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

export interface EntriesStatisticEntry extends Struct.ComponentSchema {
  collectionName: 'components_entries_statistic_entries';
  info: {
    name: 'statistic_entry';
    displayName: 'statistic_entry';
    icon: 'user-graduate';
  };
  attributes: {
    year: Schema.Attribute.String & Schema.Attribute.Required;
    single_entry: Schema.Attribute.Component<'entries.single-entry', true>;
  };
}

export interface EntriesSingleEntry extends Struct.ComponentSchema {
  collectionName: 'components_entries_single_entries';
  info: {
    name: 'single_entry';
    displayName: 'single_entry';
    icon: 'angle-right';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EntriesGallery extends Struct.ComponentSchema {
  collectionName: 'components_entries_galleries';
  info: {
    name: 'gallery';
    displayName: 'gallery';
    icon: 'grimace';
    description: '';
  };
  attributes: {
    galleries_uat: Schema.Attribute.Relation<
      'oneToOne',
      'api::gallery-uat.gallery-uat'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

export interface EntriesFestivalEntry extends Struct.ComponentSchema {
  collectionName: 'components_entries_festival_entries';
  info: {
    name: 'festival_entry';
    displayName: 'festival_entry';
    icon: 'baby-carriage';
    description: '';
  };
  attributes: {
    festival: Schema.Attribute.Relation<'oneToOne', 'api::festival.festival'>;
    title: Schema.Attribute.String & Schema.Attribute.Private;
  };
}

export interface EntriesEuProjectEntry extends Struct.ComponentSchema {
  collectionName: 'components_entries_eu_project_entries';
  info: {
    name: 'eu_project_entry';
    displayName: 'eu_project_entry';
    icon: 'desktop';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.you-tube-player-slice': SharedYouTubePlayerSlice;
      'shared.video-with-text-slice': SharedVideoWithTextSlice;
      'shared.text-with-image': SharedTextWithImage;
      'shared.teachers-slice': SharedTeachersSlice;
      'shared.tabs': SharedTabs;
      'shared.tab-item': SharedTabItem;
      'shared.tab-item-content': SharedTabItemContent;
      'shared.subjects': SharedSubjects;
      'shared.subjects-section': SharedSubjectsSection;
      'shared.sponsor': SharedSponsor;
      'shared.single-winner': SharedSingleWinner;
      'shared.short-text': SharedShortText;
      'shared.rich-text-with-title': SharedRichTextWithTitle;
      'shared.prizes': SharedPrizes;
      'shared.gallery': SharedGallery;
      'shared.gallery-image': SharedGalleryImage;
      'shared.festival-winners': SharedFestivalWinners;
      'shared.festival-prizes': SharedFestivalPrizes;
      'shared.employment-statistics': SharedEmploymentStatistics;
      'shared.code': SharedCode;
      'shared.cards': SharedCards;
      'shared.card-item': SharedCardItem;
      'shared.applications-at-university': SharedApplicationsAtUniversity;
      'shared.applications-at-uni-section': SharedApplicationsAtUniSection;
      'navigation.internal-link': NavigationInternalLink;
      'navigation.image-box-link': NavigationImageBoxLink;
      'navigation.footer-section': NavigationFooterSection;
      'navigation.external-link': NavigationExternalLink;
      'navigation.download-link': NavigationDownloadLink;
      'navigation.conditional-internal-link': NavigationConditionalInternalLink;
      'navigation.conditional-external-link': NavigationConditionalExternalLink;
      'entries.teacher-entry': EntriesTeacherEntry;
      'entries.study-entry': EntriesStudyEntry;
      'entries.statistic-entry': EntriesStatisticEntry;
      'entries.single-entry': EntriesSingleEntry;
      'entries.gallery': EntriesGallery;
      'entries.festival-entry': EntriesFestivalEntry;
      'entries.eu-project-entry': EntriesEuProjectEntry;
    }
  }
}
