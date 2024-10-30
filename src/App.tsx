import Input from './components/Input';
import { useInput } from './hooks/useInput';
import { hasMinLength, isNotEmpty } from './util/validation';

function App() {
  const { value: usernameValue, isEdited, handleInputBlur, handleInputChange } = useInput('');
  const isValid = isNotEmpty(usernameValue) && hasMinLength(usernameValue, 4);
  const hasError = isEdited && !isValid

  return (
    <>
    <div className="w-screen h-screen flex items-center justify-center">
      <Input
        id="username"
        label="Username Input"
        name='username'
        placeholder='Username'
        type='text'
        value={usernameValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        error={hasError && 'Please enter a valid text'}
        wrapperClasses='flex flex-col'
        labelClasses='font-semibold'
        inputClasses={`${hasError ? 'border-red-500' : 'border-black'} border-2 rounded-sm px-1 placeholder:text-black`}
        errorClasses='text-red-500'
      />
    </div>
    </>
  );
}

export default App;
