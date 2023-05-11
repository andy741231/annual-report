// start animation for fade

const animate = entries => {
    entries.forEach( entry => {
      const fadeEl = entry.target
      if ( entry.isIntersecting && ! fadeEl.classList.contains( 'is-visible' ) ) {
        fadeEl.classList.remove('visually-hidden')
        fadeEl.classList.add('animate__animated', 'animate__fadeIn')
        fadeEl.classList.add( 'is-visible' )
      }
    } )
  }
  
  const IO2 = new IntersectionObserver( animate, { threshold: .5 } )
  const party = document.querySelectorAll('.party')
  
  party.forEach(function(partyElement) {
    IO2.observe(partyElement);
  });