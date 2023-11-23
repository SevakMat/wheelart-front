
import { Box } from "@mui/system"

import { RootState, useAppSelector } from "../../store";

const HomePage = () => {
  const { user } = useAppSelector((state: RootState) => state.auth)

  return (
    <Box>
      home
    </Box>
  )
}

export default HomePage