import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArticleDetail, Pagination, PayloadArticle } from 'interface';
import { request } from 'utils';
import { path } from 'config';
import { generateQueryString } from 'helpers';
import { RootState } from 'stores';

export const getArticles = createAsyncThunk('articles/getArticles', async ({ sort, offset, page = 0, limit = 20, }: Pagination, thunkAPI) => {
    try {
        const { user: { user: { accessToken } } } = await thunkAPI.getState() as RootState;
        const response = await request<ArticleDetail[]>
            ({ path: `${ path.article }?${ generateQueryString({ page, limit, sort: 'ASC' }) }`, method: 'GET', token: accessToken });
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addArticle = createAsyncThunk('articles/addArticle', async (payload: PayloadArticle, thunkAPI) => {
    try {
        const response = await request<ArticleDetail>
            ({ path: path.article, method: 'POST', payload });
        if (response.stat_code === 200) {
            await thunkAPI.dispatch(getArticles({}));
        }
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateArticle = createAsyncThunk('articles/updateArticle', async (payload: PayloadArticle, thunkAPI) => {
    try {
        const response = await request<ArticleDetail>
            ({ path: `${ path.article }/${ payload.id }`, method: 'PUT', payload });
        if (response.stat_code === 200) {
            await thunkAPI.dispatch(getArticles({}));
        }
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (payload: PayloadArticle, thunkAPI) => {
    try {
        const response = await request<ArticleDetail>
            ({ path: `${ path.article }/${ payload.id }`, method: 'DELETE', payload });
        if (response.stat_code === 200) {
            await thunkAPI.dispatch(getArticles({}));
        }
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});