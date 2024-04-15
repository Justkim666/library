const { objectId, ObjectId } = require("mongodb");

class LibraryService {
    constructor(client) {
        this.DocGia = client.db().collection("DocGia");
        this.Sach = client.db().collection("Sach");
        this.NhaXuatBan = client.db().collection("NhaXuatBan");
        this.TheoDoiMuonSach = client.db().collection("TheoDoiMuonSach");
        this.NhanVien = client.db().collection("NhanVien");
    }

    // DocGia methods
    extractDocGiaData(payload) {
        const docGia = {
            MaDocGia: payload.MaDocGia,
            HoLot: payload.HoLot,
            Ten: payload.Ten,
            NgaySinh: payload.NgaySinh,
            Phai: payload.Phai,
            DiaChi: payload.DiaChi,
            DienThoai: payload.DienThoai
        };
        Object.keys(docGia).forEach(key => docGia[key] === undefined && delete docGia[key]);
        return docGia;
    }

    async findAllDocGia() {
        const cursor = await this.DocGia.find({});
        return await cursor.toArray();
    }

    async createOrUpdateDocGia(payload) {
        const docGia = this.extractDocGiaData(payload);
        const result = await this.DocGia.findOneAndUpdate(
            { MaDocGia: docGia.MaDocGia },
            { $set: docGia },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    

    async findDocGia(filter) {
        const cursor = await this.DocGia.find(filter);
        return await cursor.toArray();
    }

    async findDocGiaById(id) {
        return await this.DocGia.findOne({ _id: ObjectId.isValid(id) ? new ObjectId(id) : null });
    }

    async updateDocGia(id, payload) {
        const update = this.extractDocGiaData(payload);
        const result = await this.DocGia.findOneAndUpdate(
            { _id: ObjectId.isValid(id) ? new ObjectId(id) : null },
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async deleteDocGia(id) {
        const result = await this.DocGia.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }

    //----------------------------------------------------------------------------------
    // Sach methods
    extractSachData(payload) {
        const sach = {
            MaSach: payload.MaSach,
            TenSach: payload.TenSach,
            DonGia: payload.DonGia,
            SoQuyen: payload.SoQuyen,
            NamXuatBan: payload.NamXuatBan,
            MaNXB: payload.MaNXB,
            NguonGoc: payload.NguonGoc
        };
        Object.keys(sach).forEach(key => sach[key] === undefined && delete sach[key]);
        return sach;
    }
    async createOrUpdateSach(payload) {
        const result = await this.Sach.findOneAndUpdate(
            { MaSach: payload.MaSach },
            { $set: payload },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async findAllSach() {
        const cursor = await this.Sach.find({});
        return await cursor.toArray();
    }

    async findSach(filter) {
        const cursor = await this.Sach.find(filter);
        return await cursor.toArray();
    }

    async findSachById(id) {
        return await this.Sach.findOne({ 
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
         })
    }

    async updateSach(id, payload) {
        const result = await this.Sach.findOneAndUpdate(
            { _id: ObjectId.isValid(id) ? new ObjectId(id) : null },
            { $set: payload },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async deleteSach(id) {
        const result = await this.Sach.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }

    //----------------------------------------------------------------------------------
    // NhaXuatBan methods
    extractNhaXuatBanData(payload) {
        const nhaXuatBan = {
            MaNXB: payload.MaNXB,
            TenNXB: payload.TenNXB,
            DiaChi: payload.DiaChi
        };
        Object.keys(nhaXuatBan).forEach(key => nhaXuatBan[key] === undefined && delete nhaXuatBan[key]);
        return nhaXuatBan;
    }

    async createOrUpdateNhaXuatBan(payload) {
        const result = await this.NhaXuatBan.findOneAndUpdate(
            { MaNXB: payload.MaNXB },
            { $set: payload },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async findAllNhaXuatBan() {
        const cursor = await this.NhaXuatBan.find({});
        return await cursor.toArray();
    }

    async findNhaXuatBan(filter) {
        const cursor = await this.NhaXuatBan.find(filter);
        return await cursor.toArray();
    }

    async findNhaXuatBanById(id) {
        return await this.NhaXuatBan.findOne({ _id: ObjectId.isValid(id) ? new ObjectId(id) : null });
    }

    async updateNhaXuatBan(id, payload) {
        const result = await this.NhaXuatBan.findOneAndUpdate(
            { _id: ObjectId.isValid(id) ? new ObjectId(id) : null },
            { $set: payload },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async deleteNhaXuatBan(id) {
        const result = await this.NhaXuatBan.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }


    //----------------------------------------------------------------------------------
    // TheoDoiMuonSach methods
    extractTheoDoiMuonSachData(payload) {
        const theoDoiMuonSach = {
            MaDocGia: payload.MaDocGia,
            MaSach: payload.MaSach,
            NgayMuon: payload.NgayMuon,
            NgayTra: payload.NgayTra
        };
        Object.keys(theoDoiMuonSach).forEach(key => theoDoiMuonSach[key] === undefined && delete theoDoiMuonSach[key]);
        return theoDoiMuonSach;
    }

    async createOrUpdateTheoDoiMuonSach(payload) {
        const result = await this.TheoDoiMuonSach.findOneAndUpdate(
            { MaDocGia: payload.MaDocGia, MaSach: payload.MaSach },
            { $set: payload },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async findAllTheoDoiMuonSach() {
        const cursor = await this.TheoDoiMuonSach.find({});
        return await cursor.toArray();
    }
    

    async findTheoDoiMuonSach(filter) {
        const cursor = await this.TheoDoiMuonSach.find(filter);
        return await cursor.toArray();
    }

    async findTheoDoiMuonSachByIds(MaDocGia, MaSach) {
        return await this.TheoDoiMuonSach.findOne({ MaDocGia, MaSach });
    }

    async updateTheoDoiMuonSach(MaDocGia, MaSach, payload) {
        const result = await this.TheoDoiMuonSach.findOneAndUpdate(
            { MaDocGia, MaSach },
            { $set: payload },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async deleteTheoDoiMuonSach(MaDocGia, MaSach) {
        const result = await this.TheoDoiMuonSach.findOneAndDelete({
            MaDocGia,
            MaSach,
        });
        return result.value;
    }


    //----------------------------------------------------------------------------------
    // NhanVien methods
    extractNhanVienData(payload) {
        const nhanVien = {
            MSNV: payload.MSNV,
            HoTenNV: payload.HoTenNV,
            Password: payload.Password,
            Chucvu: payload.Chucvu,
            Diachi: payload.Diachi,
            SoDienThoai: payload.SoDienThoai
        };
        Object.keys(nhanVien).forEach(key => nhanVien[key] === undefined && delete nhanVien[key]);
        return nhanVien;
    }
    async createOrUpdateNhanVien(payload) {
        const result = await this.NhanVien.findOneAndUpdate(
            { MSNV: payload.MSNV },
            { $set: payload },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async findAllNhanVien() {
        const cursor = await this.NhanVien.find({});
        return await cursor.toArray();
    }

    async findNhanVien(filter) {
        const cursor = await this.NhanVien.find(filter);
        return await cursor.toArray();
    }

    async findNhanVienById(id) {
        return await this.NhanVien.findOne({ _id: ObjectId.isValid(id) ? new ObjectId(id) : null });
    }

    async updateNhanVien(id, payload) {
        const result = await this.NhanVien.findOneAndUpdate(
            { _id: ObjectId.isValid(id) ? new ObjectId(id) : null },
            { $set: payload },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async deleteNhanVien(id) {
        const result = await this.NhanVien.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
}

module.exports = LibraryService;