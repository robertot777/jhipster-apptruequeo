import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterapptruequeoProductoModule } from './producto/producto.module';
import { JhipsterapptruequeoImagenModule } from './imagen/imagen.module';
import { JhipsterapptruequeoTruequeModule } from './trueque/trueque.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterapptruequeoProductoModule,
        JhipsterapptruequeoImagenModule,
        JhipsterapptruequeoTruequeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterapptruequeoEntityModule {}
