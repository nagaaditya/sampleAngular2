﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService) { }

    
}
