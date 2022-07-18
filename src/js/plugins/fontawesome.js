import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import {} from "@fortawesome/free-regular-svg-icons";

import { faStore } from "@fortawesome/free-solid-svg-icons";

const brandIcons = [faGithub, faDiscord, faLinkedinIn];

const regularIcons = [faStore];

const solidIcons = [];

library.add(...brandIcons, ...solidIcons, ...regularIcons);

export default FontAwesomeIcon;
