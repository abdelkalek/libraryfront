import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'bx bx-home-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/default', title: 'Gestion des livres', icon: 'bx bx-right-arrow-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                { path: '/dashboard/default', title: 'List de Livres', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:  [] },
                { path: '/dashboard/addlivre', title: 'Ajouter Un Livre', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

              ] },
            { path: '/dashboard/e-commerce', title: 'Auteur', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           { path: '/dashboard/analytics', title: 'Type', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/digital-marketing', title: 'Employe', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    }
];
