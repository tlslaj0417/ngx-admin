import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@tlslaj0417/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthJWTToken, NbAuthService } from '@tlslaj0417/auth';
import { Router } from '@angular/router';
import { NbMenuBag } from '@tlslaj0417/theme/components/menu/menu.service';
import { ISubscription } from "rxjs/Subscription";
import {DynamicFlipCardService} from '../../../pages/util/fc-dynamic.service';
import {NbSearchService} from '@tlslaj0417/theme';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  private menuSubscribe : ISubscription;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private authService: NbAuthService,
              private router: Router,
            private fcService: DynamicFlipCardService,
            private  searchService: NbSearchService) {
                this.authService.onTokenChange()
                  .subscribe((token: NbAuthJWTToken) => {

                    if (token.isValid()) {
                      this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable 
                    }

                  });
  }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.nick);
    this.authService.getToken().subscribe((token: NbAuthJWTToken) => {

      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable 

      }

    });
    console.log('ngOnInit ')
    this.menuSubscribe = this.menuService.onItemClick().subscribe(( event ) => {
      console.log('onItemClick '+ event.tag)
      if(event.tag === 'usermenu'){
        this.onItemSelection(event.item.title);
      }
    });

    this.searchService.onSearchSubmit().subscribe((data: { term: string, tag: string }) => {
      console.log(`term: ${data.term}`);
        //this.fcService.searchInput( data.term);
      }
    );
  }

  onItemSelection( title ) {
    if ( title === 'Log out' ) {
      // Do something on Log out
      console.log('Log out Clicked ')
      //this.authService.logout('email');
      localStorage.clear();
      window.location.reload(true);
    } else if ( title === 'Profile' ) {
      // Do something on Profile
      console.log('Profile Clicked ')
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy ')
    this.menuSubscribe.unsubscribe();
    this.menuSubscribe = null;
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  
}
