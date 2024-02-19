import { Form } from 'antd';
import { useState } from 'react';

export const useButtonDisable = () => {
    const [form] = Form.useForm();
    const [disabled, setDisabled] = useState(true);
    const [isTouched, setIsTouched] = useState(false);

    const handleFormChange = () => {
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
        setIsTouched(form.isFieldsTouched(true));
        setDisabled(!(!hasErrors && isTouched));
    };
    return { form, disabled, handleFormChange };
};
