import AppPage from "@/ui/shared/AppPage";
import ClubPage from "@/ui/shared/ClubPage";
import { useAuth0 } from "@auth0/auth0-react";

export default function ErrorNotFound() {
	const { isAuthenticated } = useAuth0();

	const Wrapper = isAuthenticated ? ClubPage : AppPage;

	return (
		<Wrapper>
			<main>
				<p>Sorry, page not found!</p>
			</main>
		</Wrapper>
	);
}
