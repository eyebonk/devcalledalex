import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
  faEnvelope,
  faHandSparkles,
  faLayerGroup,
  faList,
  faMugSaucer,
  faStore,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

const brandIcons = [faGithub, faDiscord, faLinkedinIn]

const regularIcons = [faStore]

const solidIcons = [faEnvelope, faCode, faSun, faList, faCircle, faHandSparkles, faComments, faLayerGroup, faMugSaucer]

library.add(...brandIcons, ...solidIcons, ...regularIcons)

export default FontAwesomeIcon
