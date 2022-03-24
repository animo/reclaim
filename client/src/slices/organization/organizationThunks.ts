import { createAsyncThunk } from '@reduxjs/toolkit'

import * as Api from '../../api/OrganizationApi'

export const fetchAllOrganizations = createAsyncThunk('organization/fetchAll', async () => {
  const response = await Api.getAll()
  return response.data
})
