import prisma from "@/lib/prisma"

export default async function UserList() {
  const users = await prisma.users.findMany()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  )
}
