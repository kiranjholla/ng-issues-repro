import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestService } from './services';
import { TestComponent } from './components';

export const Test1Token = new InjectionToken('Test1Token');
export const Test2Token = new InjectionToken('Test2Token');

export function testServiceFactory(cfg1: any, cfg2: any) {
  return new TestService(cfg1, cfg2);
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule {
  static forRoot(cfg1: any, cfg2: any): ModuleWithProviders {
    return {
      ngModule: TestModule,
      providers: [
        { provide: Test1Token, useValue: cfg1 },
        { provide: Test2Token, useValue: cfg2 },
        {
          provide: TestService,
          useFactory: (testServiceFactory),
          deps: [Test1Token, Test2Token]
        }
      ]
    };
  }
}
