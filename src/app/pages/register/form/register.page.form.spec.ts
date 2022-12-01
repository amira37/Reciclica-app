import { FormBuilder, FormGroup } from "@angular/forms";
import { RegisterPageForm } from "./register.page.form";

describe('RegisterPageForm', () => {
    let registerPageForm: RegisterPageForm;
    let form: FormGroup
    beforeEach(() => {
        registerPageForm = new RegisterPageForm(new FormBuilder());
        form = registerPageForm.getForm();
    })


    it('should empty name be invalid', () => {
        expect(form.get('name').valid).toBeFalsy();
    });


    it('should empty name be invalid', () => {
        expect(form.get('address').get('number').valid).toBeFalsy();
    });


    it('should empty name be invalid', () => {
        expect(form.get('address').get('neighborhood').valid).toBeFalsy();
    });


    it('should empty name be invalid', () => {
        expect(form.get('address').get('complement').valid).toBeFalsy();
    });


    it('should empty name be invalid', () => {
        expect(form.get('address').get('zipCode').valid).toBeFalsy();
    });


    it('should empty name be invalid', () => {
        expect(form.get('address').get('state').valid).toBeFalsy();
    });


    it('should empty name be invalid', () => {
        expect(form.get('address').get('city').valid).toBeFalsy();
    });


    it('should invalid email be invalid', () => {
        form.get('email').setValue('invalid@email');
        expect(form.get('email').valid).toBeFalsy();
    });

    it('should password less than 7 characters be invalid', () => {
        form.get('password').setValue('any password');
        expect(form.get('password').valid).toBeFalsy();
    });

    it('should password different from repeat password be invalid', () => {
        form.get('password').setValue('anypassword');
        form.get('repeatPassword').setValue('anotherPassword');
        expect(form.get('repeatPassword').valid).toBeFalsy();
    });
    

});