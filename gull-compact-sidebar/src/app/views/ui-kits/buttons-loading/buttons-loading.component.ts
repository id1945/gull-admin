import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-loading',
  templateUrl: './buttons-loading.component.html',
  styleUrls: ['./buttons-loading.component.scss']
})
export class ButtonsLoadingComponent implements OnInit {

    loadingButtons = [
        {
          name: 'primary',
          loading: false,
        },
        {
          name: 'secondary',
          loading: false,
        },
        {
          name: 'success',
          loading: false,
        },
        {
          name: 'warning',
          loading: false,
        },
        {
          name: 'info',
          loading: false,
        },
        {
          name: 'danger',
          loading: false,
        },
        {
          name: 'light',
          loading: false,
        },
        {
          name: 'dark',
          loading: false,
        }
      ];
      laddaButtons = [
        {
          name: 'primary',
          loading: false,
        },
        {
          name: 'secondary',
          loading: false,
        },
        {
          name: 'success',
          loading: false,
        },
        {
          name: 'warning',
          loading: false,
        },
        {
          name: 'info',
          loading: false,
        },
        {
          name: 'danger',
          loading: false,
        },
        {
          name: 'light',
          loading: false,
        },
        {
          name: 'dark',
          loading: false,
        }
      ];
      constructor() {
      }
      ngOnInit() {}

      showLoading(btn) {
        btn.loading = true;
        setTimeout(() => {
          btn.loading = false;
        }, 3000);
      }

}
