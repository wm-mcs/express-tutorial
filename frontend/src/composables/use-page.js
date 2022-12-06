const setPageTitle = (title) => {
  if (title) {
    document.title = title;
  }
};

const setPageDescription = (desc) => {
  if (desc) {
    let el = document.querySelector("meta[name='description']");

    if (el === null) {
      el = document.createElement('meta');
      el.setAttribute('name', 'description');
    }
    
    el.setAttribute('content', desc);
  }
};

const setPageData = (data) => {
  
  const { title, description } = data;
  setPageTitle(title);
  setPageDescription(description);
};

export function usePage() {
  return {
    setPageData,
  };
}
