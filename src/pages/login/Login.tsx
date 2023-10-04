import { Form, useActionData, useLocation, useNavigation } from 'react-router-dom';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Alert from '../../components/alert/Alert';

export const LoginPage = () => {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let from = params.get('from') || '/';

    let navigation = useNavigation();
    let isLoggingIn = navigation.formData?.get('email') != null;

    let actionData = useActionData() as { error: string } | undefined;

    return (
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                </h1>

                <Form method="post" replace className="space-y-4 md:space-y-6">
                    <Input type="hidden" name="redirectTo" value={from} />

                    <div>
                        <Input label="Your email" id="email" type="email" name="email" placeholder="name@company.com" />
                    </div>

                    <div>
                        <Input label="Password" id="password" type="password" name="password" placeholder="••••••••" />
                    </div>

                    <Button type="submit" disabled={isLoggingIn}>
                        {isLoggingIn ? 'Logging in...' : 'Login'}
                    </Button>

                    {actionData && actionData.error ? <Alert type="error" message={actionData.error} /> : null}
                </Form>
            </div>
        </div>
    );
};
