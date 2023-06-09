import prisma from "@/app/lib/prisma"

export default async function UserList() {
  const users = await prisma.user.findMany()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  )
}
