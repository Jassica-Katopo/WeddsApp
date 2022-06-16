import React from 'react'
import { IconEditProfile, IconSignOut } from '../../assets'

// kalo mau tambah change password, history/progress.

export const DummyMenu = [
    {
        id: 1,
        name: 'Edit Profile',
        icon: <IconEditProfile/>,
        page: 'EditProfile'
    },
    {
        id: 2,
        name: 'Sign Out',
        icon: <IconSignOut/>,
        page: 'SignIn'
    }
]