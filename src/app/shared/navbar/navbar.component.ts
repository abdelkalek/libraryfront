import { Component , OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import {AuthService} from "../../auth/sign-in/auth.service";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
   email=""
   role =['1']

    constructor(public sidebarservice: SidebarService, private authService:AuthService) { }

    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {

        /* Search Bar */
        $(document).ready(function () {
            $(".mobile-search-icon").on("click", function () {
                $(".search-bar").addClass("full-search-bar")
            }),
            $(".search-close").on("click", function () {
                $(".search-bar").removeClass("full-search-bar")
            })
        });
        this.authService.userAuth.subscribe({
          next:(res)=>{
            this.email = res.email
            this.role = res.roles

          }
        })
    }

  Logout() {
    this.authService.logout();
  }
}
