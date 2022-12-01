import { FormBuilder, FormGroup, Validators } from "@angular/forms"

export class RegisterPageForm {

    private formBuilder: FormBuilder;
    form: FormGroup<any>;

    constructor(formBuilder: FormBuilder){

        this.formBuilder = formBuilder
    };
    createForm() : FormGroup {

        return this.formBuilder.group({

            name: ['',[]],
            phoneNumber: ['',[Validators.required]],
            address: this.formBuilder.group({
                number: ['',[Validators.required]],
                neighborhood: ['',[Validators.required]],
                complement: ['',[Validators.required]],
                zipCode: ['',[Validators.required]],
                state: ['',[Validators.required]],
                city: ['',[Validators.required]]
            })

        });


    }

    getForm() : FormGroup{
        return this.form;
    }

}