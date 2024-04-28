import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, Event} from '@angular/router';
import {AuthentificationService} from "../services/services";
import {TokenService} from "../services/token/token.service";

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url!: string;
  url1!: string;
  activeRoute!: string;
  active2Route!: string;
  guestuser = false;
  registereduser = false;
  constructor(private router: Router,
              protected tokenService: TokenService,
              protected authService: AuthentificationService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split('/');
        this.url = url[1];
        this.url1 = url[2];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
      }
    });
  }

  ngOnInit(): void {
    // Sidebar

    if ($(window).width() <= 991) {
      var Sidemenu = function () {
        this.$menuItem = $('.main-nav a');
      };

      function init() {

        var $this = Sidemenu;
        $('.main-nav a').on('click', function (e: { preventDefault: () => void; }) {
          if ($(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
          }
          if (!$(this).hasClass('submenu')) {
            $('ul', $(this).parents('ul:first')).slideUp(350);
            $('a', $(this).parents('ul:first')).removeClass('submenu');
            $(this).next('ul').slideDown(350);
            $(this).addClass('submenu');
          } else if ($(this).hasClass('submenu')) {
            $(this).removeClass('submenu');
            $(this).next('ul').slideUp(350);
          }
        });
      }

      // Sidebar Initiate
      init();
    }

    // Mobile menu sidebar overlay

    $('body').append('<div class="sidebar-overlay"></div>');
    // tslint:disable-next-line:only-arrow-functions typedef
    $(document).on('click', '#mobile_btn', function() {
      $('main-wrapper').toggleClass('slide-nav');
      $('.sidebar-overlay').toggleClass('opened');
      $('html').addClass('menu-opened');
      return false;
    });

    // tslint:disable-next-line:typedef
    $(document).on('click', '.sidebar-overlay', function() {
      $('html').removeClass('menu-opened');
      $(this).removeClass('opened');
      $('main-wrapper').removeClass('slide-nav');
    });

    // tslint:disable-next-line:only-arrow-functions typedef
    $(document).on('click', '#menu_close', function() {
      $('html').removeClass('menu-opened');
      $('.sidebar-overlay').removeClass('opened');
      $('main-wrapper').removeClass('slide-nav');
    });
  }

  protected readonly AuthentificationService = AuthentificationService;
  protected readonly localStorage = localStorage;

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLogedIn');
    window.location.reload();
  }
}
