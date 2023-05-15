import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.formData()

  const imageUploaded = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/clhj92mmo2mue01t9gi0g8vom/master/upload',
    {
      body,
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODM4MjAxNDIsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xoajkybW1vMm11ZTAxdDlnaTBnOHZvbS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjFkYWNiNjYtNmJiYy00Y2QwLTljODAtZWI3ZDgxNDBkOWU1IiwianRpIjoiY2xoamIxY3F4Mnd2bzAxdW44ejJ5YnowMyJ9.st6AN_gdtPuH8D19COLhyAs0a-O-H-Sy37J-xdbxdzz4U2LqvqbtAXWWbOWqkxo0HU8FyByOaoXWv5IrnRrCSFClQwepublGuYqW8SxkY3tp5U8dMMxA0EayKMJBfgqum6VSq77eeO7DvdiRUvV2SbOIH5-xZ_RlasIB5c3G81PQfvJqiRycikhJ2D2hsxsXXsh5MCrGnJtOpXIR-ZATK-TjG_J1nyH7ipKxdzVTLe2nGGVN2MDVStjYnUmg23ormSAdYhMk09ptHN_G16VcoWr3Bp7kpry3By6TlsghYLrS7ne7O598UhWEXL3X8RAFFwDET2Pfg7X7bNQbCCUwZTtkYMZsvgisY9FoFYLK9rzQsDll8RNKLCmMgLFLcCKGoDh1T315sxwR8MocLwhas3DZsORe5hItnjEsHopenL6dzkT6wBXnbzgW9p-S0rI1qQ0h8jzZbz2KVREIlsqDZMZt5RhX_rvZ64EggxBWxU-rEZkRbvqVvtmFrIKU657sjJ9ghZZHlCmmO6n8nEvOcuv43HQNpGiGB0vlklJ5Y8LxEIR328BcXSE83bijkVPUK4sU0W2AG1bcOKufMbpV8rNo88k1TIxCEFUssmAmk3sGCCQbKhEcs5-Ii-z_zbUG2stIQDJLfEyk-X_3FLG7mOQHNOMfkZjQaBctMrYVQrc',
      },
    },
  ).then((data) => data.json())
  console.log(imageUploaded)
  return NextResponse.json({ imageUploaded })
}
