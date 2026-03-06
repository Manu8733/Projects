namespace AutomatizareCladire
{
    partial class Dashboard
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnLumina = new System.Windows.Forms.Button();
            this.lblStatusLumina = new System.Windows.Forms.Label();
            this.lblVent = new System.Windows.Forms.Label();
            this.lblTempDorita = new System.Windows.Forms.Label();
            this.lblTempCurenta = new System.Windows.Forms.Label();
            this.btnVent = new System.Windows.Forms.Button();
            this.trackTemp = new System.Windows.Forms.TrackBar();
            this.picLed = new System.Windows.Forms.PictureBox();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.fișierToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.logoutToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.ieșireToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.setăriToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.resetareLuminăToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.resetareVentilațieToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.ajutorToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.despreToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.picVent = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.trackTemp)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picLed)).BeginInit();
            this.menuStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picVent)).BeginInit();
            this.SuspendLayout();
            // 
            // btnLumina
            // 
            this.btnLumina.BackColor = System.Drawing.Color.LightSteelBlue;
            this.btnLumina.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnLumina.Font = new System.Drawing.Font("Segoe UI", 11F);
            this.btnLumina.ForeColor = System.Drawing.Color.Transparent;
            this.btnLumina.Location = new System.Drawing.Point(76, 98);
            this.btnLumina.Name = "btnLumina";
            this.btnLumina.Size = new System.Drawing.Size(100, 30);
            this.btnLumina.TabIndex = 0;
            this.btnLumina.Text = "Lumina ON/OFF";
            this.btnLumina.UseVisualStyleBackColor = false;
            this.btnLumina.Click += new System.EventHandler(this.btnLumina_Click);
            // 
            // lblStatusLumina
            // 
            this.lblStatusLumina.AutoSize = true;
            this.lblStatusLumina.Location = new System.Drawing.Point(84, 77);
            this.lblStatusLumina.Name = "lblStatusLumina";
            this.lblStatusLumina.Size = new System.Drawing.Size(87, 13);
            this.lblStatusLumina.TabIndex = 1;
            this.lblStatusLumina.Text = "Lumina: OPRITĂ";
            this.lblStatusLumina.Click += new System.EventHandler(this.label1_Click);
            // 
            // lblVent
            // 
            this.lblVent.AutoSize = true;
            this.lblVent.Location = new System.Drawing.Point(316, 77);
            this.lblVent.Name = "lblVent";
            this.lblVent.Size = new System.Drawing.Size(96, 13);
            this.lblVent.TabIndex = 2;
            this.lblVent.Text = "Ventilație: OPRITĂ";
            this.lblVent.Click += new System.EventHandler(this.lblVent_Click);
            // 
            // lblTempDorita
            // 
            this.lblTempDorita.AutoSize = true;
            this.lblTempDorita.Location = new System.Drawing.Point(84, 254);
            this.lblTempDorita.Name = "lblTempDorita";
            this.lblTempDorita.Size = new System.Drawing.Size(92, 13);
            this.lblTempDorita.TabIndex = 3;
            this.lblTempDorita.Text = "Temp dorită: 22°C";
            this.lblTempDorita.Click += new System.EventHandler(this.label3_Click);
            // 
            // lblTempCurenta
            // 
            this.lblTempCurenta.AutoSize = true;
            this.lblTempCurenta.Location = new System.Drawing.Point(313, 254);
            this.lblTempCurenta.Name = "lblTempCurenta";
            this.lblTempCurenta.Size = new System.Drawing.Size(99, 13);
            this.lblTempCurenta.TabIndex = 4;
            this.lblTempCurenta.Text = "Temp curentă: -- °C";
            this.lblTempCurenta.Click += new System.EventHandler(this.lblTempCurenta_Click);
            // 
            // btnVent
            // 
            this.btnVent.BackColor = System.Drawing.Color.LightSteelBlue;
            this.btnVent.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnVent.Font = new System.Drawing.Font("Segoe UI", 11F);
            this.btnVent.ForeColor = System.Drawing.Color.White;
            this.btnVent.Location = new System.Drawing.Point(312, 98);
            this.btnVent.Name = "btnVent";
            this.btnVent.Size = new System.Drawing.Size(100, 30);
            this.btnVent.TabIndex = 5;
            this.btnVent.Text = "Ventilație ON/OFF";
            this.btnVent.UseVisualStyleBackColor = false;
            this.btnVent.Click += new System.EventHandler(this.btnVent_Click);
            // 
            // trackTemp
            // 
            this.trackTemp.Location = new System.Drawing.Point(24, 283);
            this.trackTemp.Maximum = 30;
            this.trackTemp.Minimum = 16;
            this.trackTemp.Name = "trackTemp";
            this.trackTemp.Size = new System.Drawing.Size(442, 45);
            this.trackTemp.TabIndex = 6;
            this.trackTemp.Value = 22;
            this.trackTemp.Scroll += new System.EventHandler(this.trackTemp_Scroll);
            // 
            // picLed
            // 
            this.picLed.Image = global::AutomatizareCladire.Properties.Resources.led_off;
            this.picLed.Location = new System.Drawing.Point(96, 129);
            this.picLed.Name = "picLed";
            this.picLed.Size = new System.Drawing.Size(64, 64);
            this.picLed.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picLed.TabIndex = 7;
            this.picLed.TabStop = false;
            this.picLed.Click += new System.EventHandler(this.picLed_Click);
            // 
            // menuStrip1
            // 
            this.menuStrip1.BackgroundImage = global::AutomatizareCladire.Properties.Resources.background_app;
            this.menuStrip1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fișierToolStripMenuItem,
            this.setăriToolStripMenuItem,
            this.ajutorToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(494, 24);
            this.menuStrip1.TabIndex = 8;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // fișierToolStripMenuItem
            // 
            this.fișierToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.logoutToolStripMenuItem,
            this.ieșireToolStripMenuItem});
            this.fișierToolStripMenuItem.ForeColor = System.Drawing.Color.White;
            this.fișierToolStripMenuItem.Name = "fișierToolStripMenuItem";
            this.fișierToolStripMenuItem.Size = new System.Drawing.Size(46, 20);
            this.fișierToolStripMenuItem.Text = "Fișier";
            // 
            // logoutToolStripMenuItem
            // 
            this.logoutToolStripMenuItem.Name = "logoutToolStripMenuItem";
            this.logoutToolStripMenuItem.Size = new System.Drawing.Size(112, 22);
            this.logoutToolStripMenuItem.Text = "Logout";
            this.logoutToolStripMenuItem.Click += new System.EventHandler(this.logoutToolStripMenuItem_Click);
            // 
            // ieșireToolStripMenuItem
            // 
            this.ieșireToolStripMenuItem.Name = "ieșireToolStripMenuItem";
            this.ieșireToolStripMenuItem.Size = new System.Drawing.Size(112, 22);
            this.ieșireToolStripMenuItem.Text = "Ieșire";
            this.ieșireToolStripMenuItem.Click += new System.EventHandler(this.ieșireToolStripMenuItem_Click);
            // 
            // setăriToolStripMenuItem
            // 
            this.setăriToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.resetareLuminăToolStripMenuItem,
            this.resetareVentilațieToolStripMenuItem});
            this.setăriToolStripMenuItem.ForeColor = System.Drawing.Color.White;
            this.setăriToolStripMenuItem.Name = "setăriToolStripMenuItem";
            this.setăriToolStripMenuItem.Size = new System.Drawing.Size(48, 20);
            this.setăriToolStripMenuItem.Text = "Setări";
            this.setăriToolStripMenuItem.Click += new System.EventHandler(this.setăriToolStripMenuItem_Click);
            // 
            // resetareLuminăToolStripMenuItem
            // 
            this.resetareLuminăToolStripMenuItem.Name = "resetareLuminăToolStripMenuItem";
            this.resetareLuminăToolStripMenuItem.Size = new System.Drawing.Size(169, 22);
            this.resetareLuminăToolStripMenuItem.Text = "Resetare lumină";
            this.resetareLuminăToolStripMenuItem.Click += new System.EventHandler(this.resetareLuminăToolStripMenuItem_Click);
            // 
            // resetareVentilațieToolStripMenuItem
            // 
            this.resetareVentilațieToolStripMenuItem.Name = "resetareVentilațieToolStripMenuItem";
            this.resetareVentilațieToolStripMenuItem.Size = new System.Drawing.Size(169, 22);
            this.resetareVentilațieToolStripMenuItem.Text = "Resetare ventilație";
            this.resetareVentilațieToolStripMenuItem.Click += new System.EventHandler(this.resetareVentilațieToolStripMenuItem_Click_1);
            // 
            // ajutorToolStripMenuItem
            // 
            this.ajutorToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.despreToolStripMenuItem});
            this.ajutorToolStripMenuItem.ForeColor = System.Drawing.Color.White;
            this.ajutorToolStripMenuItem.Name = "ajutorToolStripMenuItem";
            this.ajutorToolStripMenuItem.Size = new System.Drawing.Size(52, 20);
            this.ajutorToolStripMenuItem.Text = "Ajutor";
            // 
            // despreToolStripMenuItem
            // 
            this.despreToolStripMenuItem.Name = "despreToolStripMenuItem";
            this.despreToolStripMenuItem.Size = new System.Drawing.Size(110, 22);
            this.despreToolStripMenuItem.Text = "Despre";
            this.despreToolStripMenuItem.Click += new System.EventHandler(this.despreToolStripMenuItem_Click);
            // 
            // picVent
            // 
            this.picVent.Image = global::AutomatizareCladire.Properties.Resources.led_off;
            this.picVent.Location = new System.Drawing.Point(333, 129);
            this.picVent.Name = "picVent";
            this.picVent.Size = new System.Drawing.Size(64, 64);
            this.picVent.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picVent.TabIndex = 9;
            this.picVent.TabStop = false;
            this.picVent.Click += new System.EventHandler(this.picVent_Click);
            // 
            // Dashboard
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.SteelBlue;
            this.BackgroundImage = global::AutomatizareCladire.Properties.Resources.background_app;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(494, 372);
            this.Controls.Add(this.btnLumina);
            this.Controls.Add(this.picVent);
            this.Controls.Add(this.picLed);
            this.Controls.Add(this.trackTemp);
            this.Controls.Add(this.btnVent);
            this.Controls.Add(this.lblTempCurenta);
            this.Controls.Add(this.lblTempDorita);
            this.Controls.Add(this.lblVent);
            this.Controls.Add(this.lblStatusLumina);
            this.Controls.Add(this.menuStrip1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.SizableToolWindow;
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "Dashboard";
            this.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.Text = "HomeRun";
            this.Load += new System.EventHandler(this.Dashboard_Load);
            ((System.ComponentModel.ISupportInitialize)(this.trackTemp)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picLed)).EndInit();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picVent)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnLumina;
        private System.Windows.Forms.Label lblStatusLumina;
        private System.Windows.Forms.Label lblVent;
        private System.Windows.Forms.Label lblTempDorita;
        private System.Windows.Forms.Label lblTempCurenta;
        private System.Windows.Forms.Button btnVent;
        private System.Windows.Forms.TrackBar trackTemp;
        private System.Windows.Forms.PictureBox picLed;
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem fișierToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem logoutToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem setăriToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem resetareLuminăToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem ajutorToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem ieșireToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem resetareVentilațieToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem despreToolStripMenuItem;
        private System.Windows.Forms.PictureBox picVent;
    }
}