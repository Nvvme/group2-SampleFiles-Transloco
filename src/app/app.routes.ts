/* Step 5c: Routing Configuration for the About Component
   // This routing configuration lazy loads the About component and its 'about' translation scope.
   // When activated, navigating to '/about' will load the About component with the appropriate translations.
   
export const routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    providers: [provideTranslocoScope('about')]
  },
  {
    path: '**', redirectTo: '/'
  }
];
*/
