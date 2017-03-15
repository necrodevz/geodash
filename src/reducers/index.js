//import types from '../actions'
import { navItems, appSites } from '../initializers'

console.log({nav:navItems, app:appSites})

export function nav(state=navItems, action) {
    switch(action.type) {
        default:
            return state
    }
}

export function apps(state=appSites, action) {
    switch(action.type) {
        default:
            return state
    }
}

export function currentPage(state='', action) {
    switch(action.type) {
        
        default:
            return state
    }
}