import AppLayout from "../../features/layout/presentation/views/AppLayout";

interface AppProps {
    initialSection?: string;
}

export default function App({ initialSection = "hero" }: AppProps) {
    return <AppLayout initialSection={initialSection} />;
}