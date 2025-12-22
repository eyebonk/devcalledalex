import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDiscord,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

import {
  faCircle,
  faCode,
  faComments,
  faDownload,
  faEnvelope,
  faHandSparkles,
  faLayerGroup,
  faLink,
  faList,
  faMugSaucer,
  faStore,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const brandIcons = [faGithub, faDiscord, faLinkedinIn]

const regularIcons = [faStore]

const solidIcons = [faEnvelope, faCode, faSun, faList, faCircle, faHandSparkles, faComments, faLayerGroup, faMugSaucer, faLink, faDownload]

library.add(...brandIcons, ...solidIcons, ...regularIcons)

export default FontAwesomeIcon
