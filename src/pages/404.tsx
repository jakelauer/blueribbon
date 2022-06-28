import AppPage from '@/ui/components/AppPage';
import DashboardPage from '@/ui/components/DashboardPage';
import { useAuth0 } from '@auth0/auth0-react';

export default function ErrorNotFound() {
	const { isAuthenticated } = useAuth0();

	const Wrapper = isAuthenticated ? DashboardPage : AppPage;

	return (
		<Wrapper>
			<main>
				<p>Sorry, page not found!</p>
			</main>
		</Wrapper>
	);
}
