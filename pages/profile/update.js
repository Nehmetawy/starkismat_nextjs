import { FormProfileUpdate } from "@/snippets/blocks";
import { BackNavigation, Gap } from "@/snippets/components";

export default function UpdateProfile() {
  return (
    <div>
      <BackNavigation />
      <Gap h={20} />
      <FormProfileUpdate />
    </div>
  );
}
