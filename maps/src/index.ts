import { User } from './User';
import { Company } from './Company'
import { CustomMap } from './CustomMap';


const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMaker(user);
customMap.addMaker(company);


// başlatmak için terminalde cmd ye "parsel index.html" yaz