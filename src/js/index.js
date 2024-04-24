// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

import { mobileNav } from './modules/mobile-nav.js';
import swiper from './modules/swiper.js';
import { tlHeader, tlArtifactsTitle, tlArtifactsGallery, tlProducts, tlLatestProjects, tlServices} from './modules/animation.js';
mobileNav();
