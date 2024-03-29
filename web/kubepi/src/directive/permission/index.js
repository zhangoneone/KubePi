import {checkPermissions} from '@/utils/permission'


function hasPermissions(el, binding) {
    const {value, modifiers} = binding
    const hasPermissions = checkPermissions(value)

    if (!hasPermissions) {
        if (modifiers && modifiers.disable) {
            el.setAttribute("disabled", true)
        } else {
            el.parentNode && el.parentNode.removeChild(el)
        }
    }
}


export default {
    hasPermissions: {
        inserted(el, binding) { //hasPermissions被绑定到元素上时，触发这里
            hasPermissions(el, binding)
        },
        update(el, binding) {//hasPermissions在元素的绑定值发生变化时，触发这里
            hasPermissions(el, binding)
        }
    }
}
