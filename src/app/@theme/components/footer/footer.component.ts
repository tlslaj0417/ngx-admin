import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b><a href="https://isharenew.dhl.com/sites/sd2020/sdInit08/SitePages/Home.aspx" target="_blank">Cloud ITS Team</a></b> 2018</span>
    <div class="socials">
      <img border="0" src="assets/images/dhl_footer.PNG">
    </div>
  `,
})
export class FooterComponent {
}
