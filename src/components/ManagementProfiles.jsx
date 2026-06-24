import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const managementTeam = [
  {
    name: "Amina Clarke",
    role: "Chief Operations Officer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200",
    email: "amina@company.com",
  },
  {
    name: "Michael Brown",
    role: "Head of Strategy",
    image:
      "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1200",
    email: "michael@company.com",
  },
  {
    name: "Sarah Johnson",
    role: "Finance Director",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200",
    email: "sarah@company.com",
  },
  {
    name: "David Okafor",
    role: "Head of Brand",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1200",
    email: "david@company.com",
  },
];

const ManagementProfiles = () => {
  return (
    <section className="px-4 py-10 lg:px-16 lg:py-16">
      <div className="max-w-8xl">
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-slate-900">
            Leadership Team
          </h2>
          <p className="mt-3 text-slate-600">
            Meet the people behind our success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {managementTeam.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-[1rem] r bg-white shadow-lg transition hover:-translate-y-2"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="mt-1 text-sm text-slate-500">{member.role}</p>

                <div className="mt-5 border-t pt-5">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MdMail size={16} />
                    {member.email}
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                    <FaLinkedin size={16} />
                    LinkedIn Profile
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementProfiles;
