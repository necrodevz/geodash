import types from '../actions'
import { navItems, appSites } from '../initializers'

console.log(navItems)

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

export function currentPage(state=1, action) {
    switch(action.type) {
        
        default:
            return state
    }
}