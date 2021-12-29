const theme = {
	activateDarkMode: () => {
	  document.body.classList.remove('light-mode');
	  document.body.classList.add('dark-mode');
	  document.querySelector('nav')?.classList.remove('navbar-light','bg-light');
	  document.querySelector('nav')?.classList.add('navbar-dark','bg-dark');
	},
	deactivateDarkMode: () => {
	  document.body.classList.remove('dark-mode');
	  document.body.classList.add('light-mode');
	  document.querySelector('nav')?.classList.remove('navbar-dark','bg-dark');
	  document.querySelector('nav')?.classList.add('navbar-light','bg-light');
	}
};

export default theme;