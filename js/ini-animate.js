          
          const maxSectionWidth = 1600
          let realSectionWidth
          if (window.innerWidth >= maxSectionWidth) {
             realSectionWidth = maxSectionWidth
          } else {
             realSectionWidth = window.innerWidth
          }

          function navLeft() {
            const container = document.querySelector(".section-container");
            container.scrollBy(-realSectionWidth, 0);
          }

          function navRight() {
            const container = document.querySelector(".section-container");
            container.scrollBy(realSectionWidth, 0);
          }

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
          const upButton = document.querySelector('#up-arrow')
          const downButton = document.querySelector('#down-arrow')
          prevButton.addEventListener('click', () => {
            updateIndex('prev')
            scrollToSection(index)
          });
          nextButton.addEventListener('click', () => {
            updateIndex('next')
            scrollToSection(index)
          });

          upButton.addEventListener('click', navLeft)
          downButton.addEventListener('click', navRight)

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
              }
            })
          }

          const fadeObs = new IntersectionObserver( animateFade, { threshold: 0 } )
          const party = document.querySelectorAll( '.party' )

          party.forEach(function(partyElement) {
            fadeObs.observe(partyElement)
          })

          //horizontal scroll div
          

          const horScrollStart = entries => {
            entries.forEach( entry => {
              let scrollEl = entry.target
              
              if (entry.isIntersecting && scrollEl.classList.contains( 'start' ) ) {
              
                upButton.classList.remove( 'd-none' )
                downButton.classList.remove( 'd-none' )
                prevButton.classList.remove( 'd-none' )
                nextButton.classList.remove( 'd-none' )

                upButton.classList.remove( 'd-block' )
                downButton.classList.remove( 'd-block' )
                prevButton.classList.remove( 'd-block' )
                nextButton.classList.remove( 'd-block' )

                upButton.classList.add( 'd-none' )
                downButton.classList.add( 'd-block' )
                prevButton.classList.add( 'd-block' )
                nextButton.classList.add( 'd-none' )
                console.log('start')
              } 
            } )
          }

          const horScrollMid = entries => {
            entries.forEach( entry => {
              let scrollEl = entry.target
              
              if (entry.isIntersecting && scrollEl.classList.contains( 'mid' ) ) {
              
                upButton.classList.remove( 'd-none' )
                downButton.classList.remove( 'd-none' )
                prevButton.classList.remove( 'd-none' )
                nextButton.classList.remove( 'd-none' )

                upButton.classList.remove( 'd-block' )
                downButton.classList.remove( 'd-block' )
                prevButton.classList.remove( 'd-block' )
                nextButton.classList.remove( 'd-block' )

                upButton.classList.add( 'd-block' )
                downButton.classList.add( 'd-block' )
                prevButton.classList.add( 'd-none' )
                nextButton.classList.add( 'd-none' )
                console.log('mid')
              } 
            } )
          }

          const horScrollEnd = entries => {
            entries.forEach( entry => {
              let scrollEl = entry.target
              
              if (entry.isIntersecting && scrollEl.classList.contains( 'end' ) ) {
              
                upButton.classList.remove( 'd-none' )
                downButton.classList.remove( 'd-none' )
                prevButton.classList.remove( 'd-none' )
                nextButton.classList.remove( 'd-none' )

                upButton.classList.remove( 'd-block' )
                downButton.classList.remove( 'd-block' )
                prevButton.classList.remove( 'd-block' )
                nextButton.classList.remove( 'd-block' )

                upButton.classList.add( 'd-block' )
                downButton.classList.add( 'd-none' )
                prevButton.classList.add( 'd-none' )
                nextButton.classList.add( 'd-block' )
                console.log('end')
              } 
            } )
          }

          const clearDiv = (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                
              } else {
                upButton.classList.remove( 'd-none' )
                downButton.classList.remove( 'd-none' )
                prevButton.classList.remove( 'd-none' )
                nextButton.classList.remove( 'd-none' )

                upButton.classList.remove( 'd-block' )
                downButton.classList.remove( 'd-block' )
                prevButton.classList.remove( 'd-block' )
                nextButton.classList.remove( 'd-block' )

                upButton.classList.add( 'd-none' )
                downButton.classList.add( 'd-none' )
                console.log('clear')
              }
            });
          };

         
              
                

               
                
          const allDiv = document.querySelectorAll( '.horizontal-section' )
          const sectionCon = document.querySelector( '.section-container' )

          // start scroll 
          const startHorScrollIO = new IntersectionObserver( horScrollStart, { threshold: 0.5 } )
          
          
          allDiv.forEach(function(scroll) {
            startHorScrollIO.observe(scroll);
          })

          // mid  scroll 
          const midHorScrollIO = new IntersectionObserver( horScrollMid, { threshold: 0.5 } )
          
          allDiv.forEach(function(scroll) {
            midHorScrollIO.observe(scroll);
          })

            // end  scroll 
            const endHorScrollIO = new IntersectionObserver( horScrollEnd, { threshold: 0.5 } )
          
            allDiv.forEach(function(scroll) {
              endHorScrollIO.observe(scroll);
            })

             // clear  scroll 
             const clearIO = new IntersectionObserver( clearDiv, { threshold: 0.5 } )
          
               clearIO.observe(sectionCon);
