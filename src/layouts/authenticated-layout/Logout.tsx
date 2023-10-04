import { useFetcher } from 'react-router-dom';

export function Logout() {
    const fetcher = useFetcher();
    const isLoggingOut = fetcher.formData != null;

    return (
        <fetcher.Form method="post" action="/logout">
            <button type="submit" disabled={isLoggingOut} className="text-white">
                {isLoggingOut ? 'Signing out...' : 'Sign out'}
            </button>
        </fetcher.Form>
    );
}
