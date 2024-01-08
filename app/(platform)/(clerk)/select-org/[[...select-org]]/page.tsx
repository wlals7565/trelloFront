import { OrganizationList } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs"

export default function CreateOrganizationPage() {
  console.log(auth().getToken())
  return (
    <OrganizationList 
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
};