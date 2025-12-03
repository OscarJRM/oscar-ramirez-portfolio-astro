import Profile_Card from "../../features/profile_card/presentation/views";

interface ProfileCardProps {
    onNavigate?: (section: string) => void;
}

export default function ProfileCard({ onNavigate }: ProfileCardProps) {
    return <Profile_Card onNavigate={onNavigate} />;
}