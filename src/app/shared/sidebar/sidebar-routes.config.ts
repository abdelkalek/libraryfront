import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'bx bx-home-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/default', title: 'Gestion des livres', icon: 'bx bx-book-heart', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                { path: '/dashboard/default', title: 'List de Livres', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:  [] },
                { path: '/dashboard/addlivre', title: 'Ajouter Un Livre', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
              ] },
            { path: '/dashboard/Auteur', title: 'Auteur', icon: 'bx bx-user-pin', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           { path: '/dashboard/type', title: 'Type', icon: 'bx bx-cog', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/employe', title: 'Employe', icon: 'bx bx-user', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                { path: '/dashboard/employe', title: 'List de Employes', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu:  [] },
                { path: '/dashboard/ajouter-employe', title: 'Ajouter Un Employe', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

              ] },
        ]
    }
];
