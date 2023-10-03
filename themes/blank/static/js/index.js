"use strict";

(function () {
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

   window.addEventListener('click', (e) => {
    closeAll(e.target)
    const id = e.target.dataset.dropdownButton
    if (!id) return

    const content = document.getElementById(id)
    
    if (e.target.getAttribute('aria-expanded') == 'true') {
        close(e.target, content)
    } else {
        open(e.target, content)
    }
   })

   closeAll()
})();