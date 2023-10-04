"use strict";

(function createDropdowns () {
   const nav = document.querySelector('[data-nav]')

   const close = (button, content) => {
        button.setAttribute('aria-expanded', false)
        content.hidden = true

        content.querySelectorAll('a').forEach((el) => {
            el.setAttribute('tabindex', -1)
        })
   }

   const open = (button, content) => {
        button.setAttribute('aria-expanded', true)
        content.hidden = false

        content.querySelectorAll('a').forEach((el) => {
            el.setAttribute('tabindex', 0)
        })
   }

   const closeAll = (target = null) => {
        nav.querySelectorAll('[data-dropdown-button]').forEach((el) => {
            if (target && el === target) return
            const id = el.dataset.dropdownButton
            const content = document.getElementById(id)
            close(el, content)
        })
   }

   const handleClick = (e) => {
        closeAll(e.target)

        const id = e.target.dataset.dropdownButton
        
        if (!id) return

        const content = document.getElementById(id)
        
        if (e.target.getAttribute('aria-expanded') == 'true') {
            close(e.target, content)
        } else {
            open(e.target, content)
        }
    }

   window.addEventListener('click', handleClick)
   closeAll()
})();

(function createMobileMenu () {
    const menuBtn = document.querySelector('[data-menu-button]')

    const open = () => {
        document.body.classList.add('menu-open')
        menuBtn.setAttribute('aria-expanded', true)
        menuBtn.innerText = 'Close'
    }

    const close = () => {
        document.body.classList.remove('menu-open')
        menuBtn.setAttribute('aria-expanded', false)
        menuBtn.innerText = 'Menu'
    }

    menuBtn.addEventListener('click', (e) => {
        const isOpen = e.target.getAttribute('aria-expanded') == 'true'
        isOpen ? close() : open()
    })

    close()
})();