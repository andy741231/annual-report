
          const sections = document.querySelectorAll('section')
          let index = 0
          const scrollToSection = (index) => {
            sections[index].scrollIntoView({ behavior: 'smooth' })
          }
          const updateIndex = (direction) => {
            if (direction === 'prev') {
              index = Math.max(0, index - 1)
            } else {
              index = Math.min(sections.length - 1, index + 1)
            }
          }
          const prevButton = document.querySelector('#left-arrow')
          const nextButton = document.querySelector('#right-arrow')
          prevButton.addEventListener('click', () => {
            updateIndex('prev')
            scrollToSection(index)
          });
          nextButton.addEventListener('click', () => {
            updateIndex('next')
            scrollToSection(index)
          });

          document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
          updateIndex('prev')
            scrollToSection(index)
        } else if (event.key === "ArrowDown") {
          updateIndex('next')
            scrollToSection(index)
        }
      })

          // Check if user scrolled to a section away from the sections[index]
          // To handle the case where the user scrolls to a section away from the sections[index],
          // an IntersectionObserver is used to monitor the sections for changes in visibility.
          // When a section becomes at least 50% visible, the index variable is updated to the 
          // index of that section using the indexOf method.

          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                index = Array.from(sections).indexOf(entry.target);
              }
            })
          }, { threshold: 0.5 })
          sections.forEach(section => observer.observe(section));

          //counter animation
          const counterUp = window.counterUp.default

          const callback = entries => {
            entries.forEach( entry => {
              const el = entry.target
              if ( entry.isIntersecting && !el.classList.contains( 'is-visible' ) ) {
                counterUp( el, {
                  duration:  2000,
                  delay: 15,
                } )
                el.classList.add( 'is-visible' )
                console.log(entry.isIntersecting)
              }
            } )
          }
          
          // start animation for stat counter
          const IO = new IntersectionObserver( callback, { threshold: .5 } )
          const count = document.querySelectorAll( '.counter' )
          
          count.forEach(function(countNumb) {
            IO.observe(countNumb);
          })

          
          // start animation for fade

          const animateFade = entries => {
            entries.forEach(entry => {
              const fadeEl = entry.target
              if (entry.isIntersecting && !fadeEl.classList.contains( 'is-visible' )) {
                fadeEl.classList.remove('visually-hidden')
                fadeEl.classList.add('animate__animated', 'animate__fadeIn')
                fadeEl.classList.add( 'is-visible' )
                console.log(entry.isIntersecting)
              } else {console.log(entry.isIntersecting)}
            })
          }

          const fadeObs = new IntersectionObserver( animateFade, { threshold: 0 } )
          const party = document.querySelectorAll( 'img.party' )

          party.forEach(function(partyElement) {
            fadeObs.observe(partyElement)
          })