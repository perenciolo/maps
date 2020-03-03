import { Map } from './Map';

import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);

const map = new Map('#map');

map.addMarker(user);
map.addMarker(company);
