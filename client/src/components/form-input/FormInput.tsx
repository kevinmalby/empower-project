type FormInputProps = {
    id: string;
    labelText: string;
    placeholder?: string;
    type: string;
    required?: boolean;
};

export default function FormInput({ id, labelText, placeholder, type, required = true }: FormInputProps) {
    return (
        <div className="mb-6">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
}
