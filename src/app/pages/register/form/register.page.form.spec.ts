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


    it('should empty email be invalid', () => {
        expect(form.get('email').valid).toBeFalsy();
    });


    it('should empty password be invalid', () => {
        expect(form.get('password').valid).toBeFalsy();
    });


    it('should empty phone be invalid', () => {
        expect(form.get('phone').valid).toBeFalsy();
    });

    it('should empty address number be invalid', () => {
        expect(form.get('address').get('number').valid).toBeFalsy();
    });


    it('should empty address neighborhood be invalid', () => {
        expect(form.get('address').get('neighborhood').valid).toBeFalsy();
    });


    it('should empty  be address complement be invalid', () => {
        expect(form.get('address').get('complement').valid).toBeFalsy();
    });

    it('should empty address zipCode be invalid', () => {
        expect(form.get('address').get('zipCode').valid).toBeFalsy();
    });

    it('should empty address state be invalid', () => {
        expect(form.get('address').get('state').valid).toBeFalsy();
    });

    it('should empty address city be invalid', () => {
        expect(form.get('address').get('city').valid).toBeFalsy();
    });

    it('should invalid email be invalid', () => {
        form.get('email').setValue('invalid@gmail.com');
        expect(form.get('email').valid).toBeTruthy();
    });

    it('should password less than 7 characters be invalid', () => {
        form.get('password').setValue('1234567');
        expect(form.get('password').valid).toBeTruthy();
    });

    it('should password be different from repeat password be invalid', () => {
        form.get('password').setValue('anypassword');
        form.get('repeatPassword').setValue('anypassword');
        expect(form.get('repeatPassword').valid).toBeTruthy();
    });

    it('should form be valid', () => {
        form.get('name').setValue('anyName');
        form.get('email').setValue('invalid@gmail.com');
        form.get('password').setValue('anypassword');
        form.get('repeatPassword').setValue('anypassword');
        form.get('phone').setValue('anyPhone');
        form.get('address').get('number').setValue('anyNumber');
        form.get('address').get('neighborhood').setValue('anyNeighborhood');
        form.get('address').get('complement').setValue('anyComplement');
        form.get('address').get('zipCode').setValue('anyZipCode');
        form.get('address').get('city').setValue('anyCity');
        form.get('address').get('state').setValue('anyState');
        expect(form.valid).toBeTruthy();
    })
    

});