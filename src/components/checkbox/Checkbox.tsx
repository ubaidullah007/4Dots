import React, { ComponentProps } from 'react'
import styles from './Checkbox.module.css';

interface CheckboxProps extends ComponentProps<'input'> {
    labelText?: string;
    value?: string;
    readonly?: boolean;
    name: string;
    onChange?: (e: React.ChangeEvent<any>) => void;
    errors?: any;
    touched?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ labelText, value, readonly, name, onChange }) => {

    return (
        <div className={`${styles.checkboxWrapper} transition-transform duration-300 ease-in-out opacity-75 hover:opacity-100 hover:scale-105 hover:z-10`}>
            <input
                type="checkbox"
                id={name}
                name={name}
                // checked={value}
                onChange={onChange}
                disabled={readonly}
                data-testid={name}
                className="checkbox"
                value={value}
            />
            <label htmlFor={name} className="p-1 f-s16 text-grey label-checkbox font-poppins font-normal cursor-pointer">
                <span className="box_wrap"></span> {labelText}
            </label>
        </div>
    )
}

export default Checkbox;